class loginForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="popup login-register-form-container login-container hide">
        <div class="login-register-form-wrapper">
          <div class="login-form">
            <h2>Log in</h2>
            <form class="input-fields">
              <input
                placeholder="Email"
                class="login-register-input"
                type="email"
              />
              <input
                autocomplete="on"
                placeholder="Password"
                class="login-register-input"
                type="password"
                required
              />
              <div class="checkbox">
                <input type="checkbox" name="remember-me" id="remember-me" /><span
                  >Remember me</span
                >
              </div>
            </form>
            <button class="login-register-button" type="submit">Log In</button>
            <div class="forgot-password">
              <a href="#"
                ><button class="forgot-password-btn">Forgot password?</button></a
              >
            </div>
          </div>
          <picture>
            <img src="/img/login image.jpg" alt="" />
          </picture>
        </div>
        <div class="register-label">
          <p>
            <i class="ri-information-line"></i>Don't have account?
            <a class="register-now-btn" href=""
              ><span class="highlight">Register now.</span></a
            >
          </p>
        </div>
        <p class="demo-info-label">
          It's a demo version. Do not login or register.
        </p>
        <button class="close-popup"><i class="ri-close-circle-line"></i></button>
      </div>`;
  }
}

customElements.define('login-form', loginForm);

class registerForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="popup login-register-form-container register-container hide">
        <div class="login-register-form-wrapper">
          <form class="login-form">
            <h2>Register</h2>
            <div class="input-fields">
              <input
                placeholder="Name"
                class="login-register-input"
                type="text"
              />
              <input
                placeholder="Email"
                class="login-register-input"
                type="email"
              />
              <input
                autocomplete="on"
                placeholder="Password"
                class="login-register-input"
                type="password"
                required
              />
              <input
                autocomplete="on"
                placeholder="Confirm password"
                class="login-register-input"
                type="password"
                required
              />
              <div class="checkbox">
                <input
                  type="checkbox"
                  name="accept-terms"
                  id="accept-terms"
                /><span>Agree with Terms & Conditions</span>
              </div>
            </div>
            <button class="login-register-button" type="submit">Register</button>
          </form>
          <picture>
            <img src="/img/login image.jpg" alt="" />
          </picture>
        </div>
  
        <p class="demo-info-label">
          It's a demo version. Do not login or register.
        </p>
        <button class="close-popup"><i class="ri-close-circle-line"></i></button>
      </div>`;
  }
}

customElements.define('register-form', registerForm);
