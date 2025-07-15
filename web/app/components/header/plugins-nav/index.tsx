'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import classNames from '@/utils/classnames'
import { Group } from '@/app/components/base/icons/src/vender/other'
import { useSelectedLayoutSegment } from 'next/navigation'
import DownloadingIcon from './downloading-icon'
import { usePluginTaskStatus } from '@/app/components/plugins/plugin-page/plugin-tasks/hooks'
import Indicator from '@/app/components/header/indicator'

type PluginsNavProps = {
  className?: string
}

const PluginsNav = ({
  className,
}: PluginsNavProps) => {
  const { t } = useTranslation()
  const selectedSegment = useSelectedLayoutSegment()
  const activated = selectedSegment === 'plugins'
  const {
    isInstalling,
    isInstallingWithError,
    isFailed,
  } = usePluginTaskStatus()

  return (
    <Link href="/plugins" className={classNames(
      className, 'group text-sm font-medium', // used for use-fold-anim-into.ts
    )}>
      <div
        className={classNames(
          'flex items-center h-7 px-2.5 cursor-pointer rounded-[10px]',
          activated && 'font-semibold bg-components-main-nav-nav-button-bg-active hover:bg-components-main-nav-nav-button-bg-active-hover shadow-md',
          activated ? 'text-components-main-nav-nav-button-text-active' : 'text-components-button-primary-text hover:bg-components-main-nav-nav-button-bg-hover',
          (isInstallingWithError || isFailed) && !activated && 'border-components-panel-border-subtle',
        )}
      >
        {/* {
          (isFailed || isInstallingWithError) && !activated && (
            <Indicator
              color='red'
              className='absolute left-[-1px] top-[-1px]'
            />
          )
        }
        <div className='mr-0.5 flex h-5 w-5 items-center justify-center'>
          {
            (!(isInstalling || isInstallingWithError) || activated) && (
              <Group className='h-4 w-4' />
            )
          }
          {
            (isInstalling || isInstallingWithError) && !activated && (
              <DownloadingIcon />
            )
          }
        </div> */}
        {t('common.menus.plugins')}
      </div>
    </Link>
  )
}

export default PluginsNav
