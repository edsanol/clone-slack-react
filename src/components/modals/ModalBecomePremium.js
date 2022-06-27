import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/components/modals/ModalBecomePremium.scss';

export const ModalBecomePremium = () => {
  const handler = window.ePayco.checkout.configure({
    key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
    test: true,
  });

  const { user } = useSelector((state) => state.userReducer);

  const handleClick = () => {
    handler.open({
      external: 'false',

      //Parametros compra (obligatorio)
      name: 'Premium User',
      description: 'Premium user on Clone Slack',
      invoice: user._id,
      currency: 'cop',
      amount: '50000',
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      // confirmation: `${process.env.REACT_APP_BASE_URL}`,
      response: `${process.env.REACT_APP_BASE_URL}/response`,

      //Atributos cliente
      name_billing: user.fullName,
    });
  };

  return (
    <div className="modal-become-premium__container">
      <h1 className="modal-become-premium__title">Go to premium user</h1>
      <p className="modal-become-premium__text">
        To create private channels you must be a premium user
      </p>
      <p className="modal-become-premium__text">
        Private channels are not available in the channel list, so only members
        you invite will access the channel
      </p>
      <div>
        <button className="form-create-channel__button" onClick={handleClick}>
          Go Premium
        </button>
      </div>
    </div>
  );
};
