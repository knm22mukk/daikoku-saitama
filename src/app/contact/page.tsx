export default function Contact() {
  return (
    <>
      <h2>お問い合わせページ</h2>
      <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method='post'>
        <div>
          <label htmlFor='name'>氏名</label>
          <input type='text' id='name' name='name' />
        </div>
        <div>
          <label htmlFor='email'>メールアドレス</label>
          <input type='email' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='company'>会社名</label>
          <input type='text' id='company' name='company' />
        </div>
        <div>
          <label htmlFor='address'>住所</label>
          <input type='text' id='address' name='address' />
        </div>
        <div>
          <label htmlFor='tel'>電話番号</label>
          <input type='text' id='tel' name='tel' />
        </div>
        <div>
          <label htmlFor='message'>メッセージ</label>
          <textarea id='message' name='message' rows={5}></textarea>
        </div>
        <div>
          <button type='submit'>送信</button>
        </div>
      </form>
    </>
  );
}
