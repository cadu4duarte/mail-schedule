import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const WriteNowValidationSchema = yup.object({
	destinationName: yup.string().required("preencha o nome completo"),
	destinationAddress: yup
		.string()
		.email("preencha um email válido")
		.required("preencha o email"),
	dueDate: yup.string().required("preencha uma data"),
	subject: yup.string().required("preencha o assunto"),
	body: yup.string().required("preencha o conteúdo"),
});

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);