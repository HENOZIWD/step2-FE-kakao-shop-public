import {
  FormState, UseFormGetFieldState, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormTrigger,
} from 'react-hook-form';
import LinkButton from '../atoms/linkButton';
import RegisterForm from '../organisms/registerForm';
import { RegisterFormData } from '../../types/formData';

interface RegisterTemplateProps {
  // Request registration
  handleRegister: React.FormEventHandler<HTMLFormElement>;

  // react-hook-form properties
  register: UseFormRegister<RegisterFormData>;
  setValue: UseFormSetValue<RegisterFormData>;
  getValues: UseFormGetValues<RegisterFormData>;
  formState: FormState<RegisterFormData>;
  getFieldState: UseFormGetFieldState<RegisterFormData>;
  trigger: UseFormTrigger<RegisterFormData>;

  // Email validation
  isEmailDuplicated: boolean;
  setIsEmailDuplicated: React.Dispatch<React.SetStateAction<boolean>>;

  // Loading
  isLoading: boolean;

  // Result message
  errorMessage: string;
}

export default function RegisterTemplate({
  handleRegister,
  register,
  setValue,
  getValues,
  formState,
  getFieldState,
  trigger,
  isEmailDuplicated,
  setIsEmailDuplicated,
  isLoading,
  errorMessage,
}: RegisterTemplateProps) {
  return (
    <div className="flex min-w-[20rem] flex-col justify-center">
      <h1 className="mt-8 py-4 text-center text-3xl">회원 가입</h1>
      <div className="my-4 p-8 pb-16
          md:w-[40rem] md:self-center md:rounded-sm md:border md:border-stone-300"
      >
        <RegisterForm
          handleRegister={handleRegister}
          register={register}
          setValue={setValue}
          getValues={getValues}
          formState={formState}
          getFieldState={getFieldState}
          trigger={trigger}
          isEmailDuplicated={isEmailDuplicated}
          setIsEmailDuplicated={setIsEmailDuplicated}
          isLoading={isLoading}
        />
        {errorMessage !== '' ? (
          <div className="my-4 text-center text-sm text-red-500">
            {errorMessage}
          </div>
        ) : null}
      </div>
      <div className="text-center">
        <LinkButton href="/">
          메인 페이지로
        </LinkButton>
      </div>
    </div>
  );
}
