'use client'
import Header from '../signin/_header'

import cn from '@/utils/classnames'
import { useGlobalPublicStore } from '@/context/global-public-context'

export default function SignInLayout({ children }: any) {
  const { systemFeatures } = useGlobalPublicStore()
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
      </div>
    </div>
  </>
}
