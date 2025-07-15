'use client'
import { useTranslation } from 'react-i18next'
import { PlusIcon } from '@heroicons/react/20/solid'
import Button from '../../base/button'
import cn from '@/utils/classnames'
import type { App } from '@/models/explore'
import AppIcon from '@/app/components/base/app-icon'
import { AppTypeIcon } from '../../app/type-selector'
export type AppCardProps = {
  app: App
  canCreate: boolean
  onCreate: () => void
  isExplore: boolean
}

const AppCard = ({
  app,
  canCreate,
  onCreate,
  isExplore,
}: AppCardProps) => {
  const { t } = useTranslation()
  const { app: appBasicInfo } = app
  return (
    <div className={cn('group flex flex-col relative justify-center items-center col-span-1  cursor-pointer  overflow-hidden rounded-lg border-[0.5px] mt-4 border-components-panel-border bg-components-panel-on-panel-item-bg pb-2 shadow-sm transition-all duration-200 ease-in-out hover:shadow-lg')}>
      <div className='w-10 h-10 relative shrink-0 m-6'>
        <AppIcon
          size='large'
          iconType={appBasicInfo.icon_type}
          icon={appBasicInfo.icon}
          background={appBasicInfo.icon_background}
          imageUrl={appBasicInfo.icon_url}
        />
        <AppTypeIcon wrapperClassName='absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-[4px] border border-divider-regular outline outline-components-panel-on-panel-item-bg'
          className='h-3 w-3' type={appBasicInfo.mode} />
      </div>
      <div className='w-full grow py-[1px] px-6'>
        <div className='flex w-full justify-center items-center text-sm font-semibold leading-5 text-text-secondary'>
          <div className='truncate' title={appBasicInfo.name}>{appBasicInfo.name}</div>
        </div>
        <div className='flex  w-full justify-center items-center text-[10px] font-medium leading-[18px] text-text-tertiary'>
          {appBasicInfo.mode === 'advanced-chat' && <div className='truncate'>{t('app.types.advanced').toUpperCase()}</div>}
          {appBasicInfo.mode === 'chat' && <div className='truncate'>{t('app.types.chatbot').toUpperCase()}</div>}
          {appBasicInfo.mode === 'agent-chat' && <div className='truncate'>{t('app.types.agent').toUpperCase()}</div>}
          {appBasicInfo.mode === 'workflow' && <div className='truncate'>{t('app.types.workflow').toUpperCase()}</div>}
          {appBasicInfo.mode === 'completion' && <div className='truncate'>{t('app.types.completion').toUpperCase()}</div>}
        </div>
      </div>

      <div className="description-wrapper system-xs-regular h-[130px] px-[14px] text-text-tertiary">
        <div className='line-clamp-6 group-hover:line-clamp-2'>
          {app.description}
        </div>
      </div>
      {isExplore && canCreate && (
        <div className={cn('absolute bottom-0 left-0 right-0 hidden bg-gradient-to-t from-components-panel-gradient-2 from-[60.27%] to-transparent p-4 pt-8 group-hover:flex')}>
          <div className={cn('flex h-[40px] w-full items-center space-x-2')}>
            <Button variant='primary' className='h-[40px] grow' onClick={() => onCreate()}>
              {/* <PlusIcon className='mr-1 h-4 w-4' /> */}
              <span className='text-xs'>{t('explore.appCard.addToWorkspace')}</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppCard
