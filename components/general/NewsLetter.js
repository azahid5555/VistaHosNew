export default function Newsletter() {
  return (
    <div className="footer_newsLetter_con">
      <form action="">
        <p>Get the fresh Vista News & Hot Offers</p>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control text-white"
            placeholder="Email"
            name="email"
          />
          <input className="btn btnnewsLetter" type="submit" />
        </div>
        <div className="checkbox_radio_container">
          <input
            type="checkbox"
            id="staffMale"
            className="required"
            name="checkbox"
          />
          <label className="checkbox" htmlFor="staffMale" />
          <label htmlFor="staffMale" className="wrapper">
            By checking you are agree to our Privay Policy
          </label>
        </div>
      </form>
    </div>
  );
}
