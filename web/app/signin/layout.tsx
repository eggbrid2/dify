import Header from './_header'

import cn from '@/utils/classnames'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'

export default async function SignInLayout({ children }: any) {
  return <>
    <div className={cn('flex flex-col min-h-screen w-full justify-center p-6 relative')}
      style={{
        backgroundImage: 'url(/education/bg_login_bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Header />

      <div className={cn('flex w-full flex-col  items-center justify-center')}>

        <div className='flex flex-col md:w-[450px] p-10 rounded-2xl border border-effects-highlight bg-components-card-bg'>
          {children}
        </div>

        {/* <div className='system-xs-regular px-8 py-6 text-text-tertiary'>
          © {new Date().getFullYear()} LangGenius, Inc. All rights reserved.
        </div> */}
      </div>
    </div>
  </>
}
