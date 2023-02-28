import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
	name: string;
}

export function DateTimerPicker({name}: Props) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value}}) => (
				<DatePicker
					selected={new Date()}
					onChange={(date: Date) => onChange(date.toISOString())}

				/>
			)}
		/>
	)
}