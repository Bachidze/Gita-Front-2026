import * as Yup from "yup"



export const SignUpSchema = Yup.object().shape({
    fullName:Yup.string().required("fullName is require"),
    email:Yup.string().email().required("emaol is require"),
    password:Yup.string().required("password is require").min(6,"min 6 char").max(20,"max 20 char")
})
