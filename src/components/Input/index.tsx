import { UseFormRegister } from 'react-hook-form';
import { Input as HeadlessInput } from '@headlessui/react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
};

export const Input = ({
  label,
  register,
  name,
  error = '',
  className,
  ...rest
}: InputProps) => {
  return (
    <div className="flex">
      <label className={`flex flex-col gap-2 ${className}`}>
        {label}
        <HeadlessInput
          {...register(name)}
          {...rest}
          className="border-2 border-white bg-black text-white w-full"
        />
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </label>
    </div>
  );
};
