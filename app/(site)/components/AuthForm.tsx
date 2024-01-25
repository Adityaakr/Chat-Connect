"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/Components/inputs/Input";
import Button from "@/app/Components/Button"
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

//using use client because should know that this is a 
//client component not a server component

const AuthForm = () => {
// defining types
 type Variant = 'LOGIN' | 'REGISTER'
 //useState hook to create a state variable variant with an initial value of 'LOGIN'
 const [variant, setVariant] = useState<Variant>('LOGIN');
 //using this to disabling our inputs after submission , initial state is false
 const [isLoading, setisLoading] = useState(false)
 
 const toggleVariant = useCallback(() => {
  if(variant === 'LOGIN'){
  setVariant('REGISTER')
  } else {
   setVariant('LOGIN')
  }
 }, [variant]);

 const { register, handleSubmit, formState:{ errors }}  = useForm<FieldValues>({
   defaultValues: {
   name: '',
   email: '',
   password: ''
  }
 });

 const onSubmit: SubmitHandler<FieldValues> = (data) => {
   
  // on submit loading should be true!
  setisLoading(true)
   
  if(variant === 'REGISTER'){
   // Axios Register
  }
 
  if (variant === 'LOGIN') {
  //NextAuth  SignIn
  }
}
  
 const socialActivation = (action: string) => {
  setisLoading(true);
  //NextAuth Social Sign in
 };


return (
<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
<div className=" bg-white px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">

<form className="space-y-6"

// we are writing handleSubmit in this way because this way we will
// get the (data) as well that we declared as arrow function.

onSubmit={handleSubmit(onSubmit)}>

{/* only if we are registering */}

{variant === 'REGISTER' && (
  <Input id="name" label="Name" register={register} errors={errors} disabled={isLoading}/>
)}

<Input id="email" label="Email address" register={register} errors={errors} disabled={isLoading}/>

<Input id="password" label="Password" register={register} errors={errors} disabled={isLoading}/>

<div className="">
        <Button disabled={isLoading} fullWidth type="submit" >
         {variant === 'LOGIN' ? 'Sign in' : 'register'}
        </Button></div>
</form>

{/* separation */}
 <div className="mt-6">
    <div className="relative">
        <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"/>
        </div>
        <div className="relative flex justify-center text-sm"> 
        <span className="bg-white px-2 text-gray-500"> or continue with</span>
        </div>
</div>


    {/* Socials */}
    <div className="mt-6 flex gap-2">
    <AuthSocialButton icon={BsGithub} onClick={() => socialActivation ('github')}/>
    <AuthSocialButton icon={BsGoogle} onClick={() => socialActivation ('Google')}/>
    </div>

   {/* new to app reigister */}
    <div className="flex gap-3 justify-center text-sm mt-6 px-2 text-gray-500">
    <div>
        {variant === 'LOGIN' ? 'New to App?' : 'Already have an account'}
    </div>
    
     {/* Register route */}
    <div onClick={toggleVariant} className="underline cursor-pointer">
     {variant === 'LOGIN' ? 'Create an account' : 'Login'}
    </div>
    </div>
  </div>
 </div>
</div>

  );

};

export default AuthForm;