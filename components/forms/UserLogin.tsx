import axios from 'axios';
import dynamic from 'next/dynamic';
import React from 'react';

import{
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';

import { useRouter } from 'next/router';
import { useSession, signIn } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const ManagerLogin = ()=> {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { data: session } = useSession();
  React.useEffect(() => {
    if (session) {
      const token = localStorage.getItem('fleetology-user');
      const jwt = require('jsonwebtoken');
      const decoded = jwt.decode(token as string);
      if (token) {
        window.location.href = decoded.user_type === 'manager' ? '/manager' : '/driver';
      }
    }
  }, [session]);
  const handleSubmit = async() => {
    console.log(email, password);
    await axios.post('http://localhost:3200/login', {
        email: email,
        password: password,
    }).then((data)=>{
        console.log(data.data.data)
        if ( data.data.data.token) {
            localStorage.setItem("fleetology-user", data.data.data.token)
        }
        else{
            alert(data.data.data.error)
        }
    })
      .catch((err)=>console.log(err))
  };

  return (
    <div>

        <div className="justify-center align-center flex h-[100vh]"> 
        <Card css={{ mw: '420px', p: '20px' }} style={{ marginTop: '-250px' }}>
          <Text size={24} weight="bold" css={{ as: 'center', mb: '20px' }}>
            Manager Login
          </Text>
          <Button icon={<FcGoogle />} color="success" onPress={()=> signIn("google")}>
            Google
          </Button>
          <Spacer y={1} />
          <Button icon={<FaFacebookF />} color="success" onPress={()=> signIn("facebook")}>
            Facebook
          </Button>
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer y={1} />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          <Spacer y={1} />
          <Button onPress={handleSubmit}>Sign in</Button>
        </Card>
        </div>
    </div>
  );
}
export default ManagerLogin;