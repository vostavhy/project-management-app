import { Button, Input, TextField } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormAuth {
  name: string;
  login: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormAuth>();

  const onSubmit: SubmitHandler<IFormAuth> = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='name'
        control={control}
        defaultValue=''
        render={({ field }) => <TextField label='Name' required {...field} />}
      />
      <Controller
        name='login'
        control={control}
        render={({ field }) => <TextField label='Login' required {...field} />}
      />
      <Controller
        name='password'
        control={control}
        render={({ field }) => <TextField label='Password' type='password' required {...field} />}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  );
}
