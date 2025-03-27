import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-gray-800 from-50% to-gray-900 to-50% space-y-6">
            
            <h2 className="font-sans text-3xl text-gray-200">
                Personel Takip Sistemi
            </h2>
            <div className="border shadow p-6 w-80 bg-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-gray-200">Login</h2>
                <form>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-400'>Email:</label>
                        <input type="email" placeholder='Email Giriniz' className='w-full px-3 py-2 border bg-gray-700 text-gray-200' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-400'>Şifre:</label>
                        <input type="password" placeholder='******' className='w-full px-3 py-2 border bg-gray-700 text-gray-200' />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label className='inline-flex items-center'>
                            <input type="checkbox" className='form-checkbox bg-gray-700 text-teal-500' />
                            <span className='ml-2 text-gray-400'>Beni Hatırla</span>
                        </label>
                        <a href="#" className='text-teal-400'>Şifremi Unuttum</a>
                    </div>
                    <div className='mb-4'>
                        <button type='submit' className='w-full bg-teal-600 text-white py-2'>Login</button>
                    </div>
                </form>
                
            </div>
            
        </div>
    );
};

export default Login;