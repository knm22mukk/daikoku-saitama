'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormValue = {
  name: string;
  email: string;
  company: string;
  address: string;
  tel: string;
  message: string;
};

export default function Contact() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ mode: 'onChange' });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT ?? '', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        router.push('/contact/thanks');
      } else {
        router.push('/contact/error');
      }
    } catch (error) {
      router.push('/contact/error');
    }
  });

  return (
    <>
      <h2>お問い合わせページ</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>氏名*</label>
          <input
            type='text'
            id='name'
            {...register('name', { required: '氏名は入力必須です。' })}
            aria-describedby='error-name-required'
          />
          {errors?.name && (
            <span id='error-name-required' aria-live='assertive'>
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor='email'>メールアドレス*</label>
          <input
            type='email'
            id='email'
            {...register('email', { required: 'メールアドレスは入力必須です。' })}
            aria-describedby='error-email-required'
          />
          {errors?.email && (
            <span id='error-email-required' aria-live='assertive'>
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor='company'>会社名*</label>
          <input
            type='text'
            id='company'
            {...register('company', { required: '会社名は入力必須です。' })}
            aria-describedby='error-company-required'
          />
          {errors?.company && (
            <span id='error-company-required' aria-live='assertive'>
              {errors.company.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor='address'>住所*</label>
          <input
            type='text'
            id='address'
            {...register('address', { required: '住所は入力必須です。' })}
            aria-describedby='error-address-required'
          />
          {errors?.address && (
            <span id='error-address-required' aria-live='assertive'>
              {errors.address.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor='tel'>電話番号*</label>
          <input
            type='text'
            id='tel'
            {...register('tel', { required: '電話番号は入力必須です。' })}
            aria-describedby='error-tel-required'
          />
          {errors?.tel && (
            <span id='error-tel-required' aria-live='assertive'>
              {errors.tel.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor='message'>メッセージ*</label>
          <textarea
            id='message'
            rows={5}
            {...register('message', { required: 'お問い合わせ内容は入力必須です。' })}
            aria-describedby='error-message-required'
          ></textarea>
          {errors?.message && (
            <span id='error-message-required' aria-live='assertive'>
              {errors.message.message}
            </span>
          )}
        </div>
        <div>
          <button type='submit'>送信</button>
        </div>
      </form>
    </>
  );
}
