import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePremium } from '../store/actions/actionUsers';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Response = () => {
  const [confirmation, setConfirmation] = useState('');
  const params = window.location.search.replace('?ref_payco=', '');

  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`https://secure.epayco.co/validation/v1/reference/${params}`)
      .then(({ data }) => {
        setConfirmation(data.data.x_response);
      });
    if (confirmation === 'Rechazada') {
      navigation('/');
      toast.error('purchase error', {
        position: 'bottom-right',
        theme: 'colored',
      });
    } else if (confirmation === 'Aceptada') {
      dispatch(changePremium());
      navigation('/');
    }
  }, [params, confirmation, dispatch, navigation]);

  return (
    <div>
      <h1>Processing the payment...</h1>
    </div>
  );
};
