import * as Yup from "yup"


export const SignInSchema = Yup.object().shape({
    email:Yup.string().email().required("emaol is require"),
    password:Yup.string().required("password is require").min(6,"min 6 char").max(20,"max 20 char")
})
