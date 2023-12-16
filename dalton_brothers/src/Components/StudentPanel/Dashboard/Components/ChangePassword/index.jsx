import React from 'react'
import { IconX } from '@tabler/icons-react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup"
import toast from "react-hot-toast";


import { Button } from '../../../../Common/buttons';
import { ChangeOldPassword } from '../../../../../Core/Services/api/course/comment/addComment/addComment';


const ChangePassword = ({setmodal,modal}) => {
    const onSubmit = async (values) => {
        const obj = {
            oldPassword : values.OldPassword,
            newPassword : values.NewPassword,
        }
        if(values.OldPassword == values.NewPassword){toast.error("پسوورد قبلی و جدید باید متفاوت باشد")}
        else{
            console.log(obj);
            const user = await ChangeOldPassword(obj)
            console.log(user.success);
        if(user.success==false){
            toast.error("درخواست خود را به درستی وارد کنید")
        }
        else{
            toast.success(" پسوورد شما با موفقیت تغییر کرد ")
          }            
        }
    }
    const validation = yup.object().shape({
        OldPassword: yup.string().required("پسوورد قبلی را وارد کنید"),
        NewPassword: yup.string().required("پسوورد جدید را وارد کنید"),
      })
  return (
    <div className='xl:w-[500px] xl:h-[400px] w-[350px] h-[300px]  bg-white border border-gray-300 shadow-[0_0_5px_4px] shadow-zinc-200 dark:shadow-[0_0_2px_3px] dark:shadow-mode-800 absolute top-24 left-5 rounded-[30px] z-10 flex flex-col items-center justify-evenly font-irSans'>
        <IconX className='w-12 h-12 relative top-1 xl:left-[220px] left-[150px] z-50' onClick={()=> setmodal(!modal)}></IconX>
        <h3 className='h-14 text-xl font-irSans '> تغییر پسوورد </h3>
        <Formik
              initialValues={{
                OldPassword: "",
                NewPassword: "",
              }}
              onSubmit={onSubmit}
              validationSchema={validation}
        >
            <Form className=' w-[350px] h-[350px] flex flex-col items-center justify-evenly pt-7 z-50'>
                <Field 
                className={" w-4/5 h-10 rounded-2xl dark:bg-mode-900 dark:text-mode-50 text-right bg-white text-[#9ca3af] outline-none border-zinc-300 border-[1px] px-4 peer "}
                placeholder={"پسوورد قبلی"}
                name={"OldPassword"}
                ></Field>
                <div className="w-full h-8 flex justify-center items-center">
                <ErrorMessage
                  name="OldPassword"
                  component={"div"}
                  className="error text-error-100 text-center"
                />
              </div>
              <Field 
                className={" w-4/5 h-10 rounded-2xl dark:bg-mode-900 dark:text-mode-50 text-right bg-white text-[#9ca3af] outline-none border-zinc-300 border-[1px] px-4 peer "}
                placeholder={"پسوورد جدید"}
                name={"NewPassword"}
                ></Field>
                <div className="w-full h-8 flex justify-center items-center">
                <ErrorMessage
                  name="NewPassword"
                  component={"div"}
                  className="error text-error-100 text-center"
                />
              </div>
                <Button 
                value={" تغییر پسوورد "}
                className={
                    "bg-pallete-100 dark:bg-DarkPallete-100 text-mode-50 w-[50%] mx-auto z-30 mb-2"
                  }
                  type={"submit"}
                />
            </Form>
        </Formik>
    </div>
  )
}

export  {ChangePassword}