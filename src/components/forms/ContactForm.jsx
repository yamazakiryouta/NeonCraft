'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // フォーム送信処理をここに実装
      // 例: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      // 成功時の処理
      setSubmitSuccess(true);
      reset();
      
      // 3秒後にメッセージを非表示
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('送信エラー:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          お問い合わせを受け付けました。内容を確認次第、ご連絡いたします。
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          className="form-input"
          {...register('name', { required: 'お名前は必須です' })}
        />
        {errors.name && (
          <p className="form-error">{errors.name.message}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className="form-input"
          {...register('email', { 
            required: 'メールアドレスは必須です', 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '有効なメールアドレスを入力してください'
            }
          })}
        />
        {errors.email && (
          <p className="form-error">{errors.email.message}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="form-label">
          件名 <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          className="form-input"
          {...register('subject', { required: '件名は必須です' })}
        />
        {errors.subject && (
          <p className="form-error">{errors.subject.message}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="form-label">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows="5"
          className="form-input"
          {...register('message', { required: 'お問い合わせ内容は必須です' })}
        ></textarea>
        {errors.message && (
          <p className="form-error">{errors.message.message}</p>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </div>
    </form>
  );
}