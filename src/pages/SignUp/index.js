import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O campo nome é obrigatório'),
    email: Yup.string()
      .email('Preencha um e-mail válido')
      .required('O campo e-mail é obrigatório'),
    password: Yup.string().required('O campo senha é obrigatório'),
  });

  const handleSubmit = values => {
    console.tron.log(values);
  };
  return (
    <>
      <h1>Go Barber</h1>
      <h2>Cadastro</h2>

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name='name' placeholder='Nome completo' />
        <Input name='email' type='email' placeholder='Seu e-mail' />
        <Input
          name='password'
          type='password'
          placeholder='Sua senha secreta'
        />
        <button type='submit'> Acessar</button>
        <Link to='/'>Já tenho login</Link>
      </Form>
    </>
  );
}
