import * as Yup from "yup";
export const stepperFormSchema = Yup.object({
    nombreApellido: Yup.string()
    .min(5)
    .required("Tu nombre y apellido es requerido"),
    DNI: Yup.string()
    .min(8, "El DNI debe tener el siguiente formato xxxxxxxx")
    .max(8, "El DNI debe tener el siguiente formato xxxxxxxx")
    .required(),
    nacionalidad: Yup.string()
    .not(["-1"])
    .required(),
    fechaNacimiento: Yup.date()
    .max(new Date(), 'Escoge una fecha anterior a hoy')
    .required("Debes seleccionar tu fecha de nacimiento").typeError("Debes seleccionar una fecha valida"),
    domicilio: Yup.string()
    .min(10)
    .required("Tu domicilio es requerido"),
    cuil: Yup.string()
    .min(14, "El CUI o CUIL debe tener el siguiente formato xx-xxxxxxxx-x")
    .max(14, "El CUI o CUIL debe tener el siguiente formato xx-xxxxxxxx-x")
    .required("CUI o CUIL es requerido"),
    telefono: Yup.string()
    .min(11, "El Teléfono debe terner el siguiente formato xx-xxxxxxxx")
    .max(11, "El Teléfono debe terner el siguiente formato xx-xxxxxxxx")
    .required("Teléfono es requerido"),
    option1: Yup.number()
    .required(),
    nombreCuenta: Yup.string(),
    CBU: Yup.string(),
    frenteDNI: Yup.string()
    .required(),
    dorsoDNI: Yup.string()
    .required(),
    
  });