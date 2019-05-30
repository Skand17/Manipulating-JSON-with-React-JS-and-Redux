import * as Yup from "yup";

export const validation = Yup.object().shape({
    name : Yup.string().required(" Name is required."),
    weight : Yup.string().required(" Weight is required."),
    url : Yup.string().required(" URL is required."),
    pricerange : Yup.string().required(" Price Range is required."),
});