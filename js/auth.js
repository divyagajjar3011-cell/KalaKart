(function(){
  const form=document.querySelector('#authForm');
  const message=document.querySelector('#authMessage');
  const mode=document.body.dataset.auth;
  const show=(text)=>{if(message){message.textContent=text;message.classList.add('show')}};
  document.querySelectorAll('.toggle-password').forEach(btn=>btn.addEventListener('click',()=>{const input=document.getElementById(btn.dataset.target); if(!input)return; input.type=input.type==='password'?'text':'password'; btn.innerHTML=input.type==='password'?'<i class="bi bi-eye"></i>':'<i class="bi bi-eye-slash"></i>';}));
  if(form){form.addEventListener('submit',e=>{e.preventDefault(); const data=Object.fromEntries(new FormData(form).entries());
    if(mode==='login'){ if(!data.email||!data.password)return show('Please enter your email and password.'); localStorage.setItem('kalakartUser',JSON.stringify({name:data.email.split('@')[0],email:data.email,role:data.role||'customer'})); show('Login successful. Opening your dashboard...'); setTimeout(()=>location.href=(data.role==='artisan'?'../artisan/artisan-dashboard.html':'../customer/customer-dashboard.html'),700); }
    else if(mode==='register'){ if(!data.name||!data.email||!data.password)return show('Please fill all required fields.'); localStorage.setItem('kalakartUser',JSON.stringify({name:data.name,email:data.email,role:'customer'})); show('Account created successfully. Redirecting...'); setTimeout(()=>location.href='../customer/customer-dashboard.html',700); }
    else if(mode==='artisan-register'){ if(!data.name||!data.email||!data.password||!data.craft)return show('Please complete your artisan details.'); localStorage.setItem('kalakartUser',JSON.stringify({name:data.name,email:data.email,role:'artisan',craft:data.craft})); show('Artisan registration submitted. Redirecting to your dashboard...'); setTimeout(()=>location.href='../artisan/artisan-dashboard.html',800); }
    else if(mode==='forgot'){ if(!data.email)return show('Please enter your email address.'); show('Demo reset link generated. Check your email in a real backend setup.'); form.reset(); }
    else if(mode==='reset'){ if(!data.password||data.password!==data.confirmPassword)return show('Passwords do not match.'); show('Password reset successful. You can now login.'); setTimeout(()=>location.href='login.html',900); }
  });}
})();
