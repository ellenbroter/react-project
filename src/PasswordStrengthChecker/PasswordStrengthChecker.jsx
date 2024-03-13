import { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let passwordStrength = '';
  if (password === '') {
    passwordStrength = '-';
  } else if (password.length < 6) {
    passwordStrength = 'Weak';
  } else if (password.length >= 6 && password.length <= 10) {
    passwordStrength = 'Medium';
  } else {
    passwordStrength = 'Strong';
  }

  return (
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
		<button>Log In</button>
      <p>Password strength: {passwordStrength}</p>
    </div>
  );
};

export default PasswordStrengthChecker