'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import AccountDropdown from './account-dropdown'
import AppNav from './app-nav'
import DatasetNav from './dataset-nav'
import EnvNav from './env-nav'
import PluginsNav from './plugins-nav'
import ExploreNav from './explore-nav'
import ToolsNav from './tools-nav'
import { WorkspaceProvider } from '@/context/workspace-context'
import { useAppContext } from '@/context/app-context'
import DifyLogo from '@/app/components/base/logo/dify-logo'
import WorkplaceSelector from '@/app/components/header/account-dropdown/workplace-selector'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import { useProviderContext } from '@/context/provider-context'
import { useModalContext } from '@/context/modal-context'
import PlanBadge from './plan-badge'
import LicenseNav from './license-env'
import { Plan } from '../billing/type'
import { useGlobalPublicStore } from '@/context/global-public-context'

const navClassName = `
  flex items-center relative px-3 h-8 rounded-xl
  font-medium text-sm
  cursor-pointer
`

const Header = () => {
  const { isCurrentWorkspaceEditor, isCurrentWorkspaceDatasetOperator } = useAppContext()
  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile
  const { enableBilling, plan } = useProviderContext()
  const { setShowPricingModal, setShowAccountSettingModal } = useModalContext()
  const systemFeatures = useGlobalPublicStore(s => s.systemFeatures)
  const isFreePlan = plan.type === Plan.sandbox
  const handlePlanClick = useCallback(() => {
    if (isFreePlan)
      setShowPricingModal()
    else
      setShowAccountSettingModal({ payload: 'billing' })
  }, [isFreePlan, setShowAccountSettingModal, setShowPricingModal])

<<<<<<< HEAD
  useEffect(() => {
    hideNavMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSegment])
  return (
    <div className='relative flex flex-1 items-center justify-between bg-background-header'>
      <div className='flex items-center'>
        {isMobile && <div
          className='flex h-8 w-8 cursor-pointer items-center justify-center'
          onClick={toggle}
        >
          <Bars3Icon className="h-4 w-4 text-gray-500" />
        </div>}
        {
          !isMobile
          && <div className='flex shrink-0 items-center gap-1.5 self-stretch pl-3'>
            <Link href="/apps" className='flex h-8 w-[110px] shrink-0 items-center justify-center'>
              <DifyLogo />
            </Link>
            {<div className='font-light text-components-button-primary-text'>/</div>}
            <div className='absolute left-[140px] top-1/2 flex -translate-y-1/2 items-center'>
              {!isCurrentWorkspaceDatasetOperator && <ExploreNav className={navClassName} />}
              {!isCurrentWorkspaceDatasetOperator && <AppNav />}
              {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && <DatasetNav />}
              {!isCurrentWorkspaceDatasetOperator && <ToolsNav className={navClassName} />}
              {<PluginsNav className={navClassName} />}

=======
  if (isMobile) {
    return (
      <div className=''>
        <div className='flex items-center justify-between px-2'>
          <div className='flex items-center'>
            <Link href="/apps" className='flex h-8 shrink-0 items-center justify-center px-0.5'>
              {systemFeatures.branding.enabled && systemFeatures.branding.workspace_logo
                ? <img
                  src={systemFeatures.branding.workspace_logo}
                  className='block h-[22px] w-auto object-contain'
                  alt='logo'
                />
                : <DifyLogo />}
            </Link>
            <div className='mx-1.5 shrink-0 font-light text-divider-deep'>/</div>
            <WorkspaceProvider>
              <WorkplaceSelector />
            </WorkspaceProvider>
            {enableBilling ? <PlanBadge allowHover sandboxAsUpgrade plan={plan.type} onClick={handlePlanClick} /> : <LicenseNav />}
          </div>
          <div className='flex items-center'>
            <div className='mr-2'>
              <PluginsNav />
>>>>>>> main
            </div>
            <AccountDropdown />
          </div>
<<<<<<< HEAD
        }
      </div >
      {isMobile && (
        <div className='flex'>
          <Link href="/apps" className='mr-4 flex items-center'>
            <DifyLogo />
          </Link>
          <div className='font-light text-divider-deep'>/</div>
          {enableBilling ? <PlanBadge allowHover sandboxAsUpgrade plan={plan.type} onClick={handlePlanClick} /> : <LicenseNav />}
        </div >
      )}
      {/* {
        !isMobile && (
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center'>
            {!isCurrentWorkspaceDatasetOperator && <ExploreNav className={navClassName} />}
            {!isCurrentWorkspaceDatasetOperator && <AppNav />}
            {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && <DatasetNav />}
            {!isCurrentWorkspaceDatasetOperator && <ToolsNav className={navClassName} />}
            <div className='flex items-center gap-0.5'>
              <WorkspaceProvider>
                <WorkplaceSelector />
              </WorkspaceProvider>
              {enableBilling ? <PlanBadge allowHover sandboxAsUpgrade plan={plan.type} onClick={handlePlanClick} /> : <LicenseNav />}
            </div>
          </div>
        )
      } */}
      <div className='flex shrink-0 items-center pr-3'>
        {/* <EnvNav />
=======
        </div>
        <div className='my-1 flex items-center justify-center space-x-1'>
          {!isCurrentWorkspaceDatasetOperator && <ExploreNav className={navClassName} />}
          {!isCurrentWorkspaceDatasetOperator && <AppNav />}
          {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && <DatasetNav />}
          {!isCurrentWorkspaceDatasetOperator && <ToolsNav className={navClassName} />}
        </div>
      </div>
    )
  }

  return (
    <div className='flex h-[56px] items-center'>
      <div className='flex min-w-0 flex-[1]  items-center pl-3 pr-2 min-[1280px]:pr-3'>
        <Link href="/apps" className='flex h-8 shrink-0 items-center justify-center px-0.5'>
          {systemFeatures.branding.enabled && systemFeatures.branding.workspace_logo
            ? <img
              src={systemFeatures.branding.workspace_logo}
              className='block h-[22px] w-auto object-contain'
              alt='logo'
            />
            : <DifyLogo />}
        </Link>
        <div className='mx-1.5 shrink-0 font-light text-divider-deep'>/</div>
        <WorkspaceProvider>
          <WorkplaceSelector />
        </WorkspaceProvider>
        {enableBilling ? <PlanBadge allowHover sandboxAsUpgrade plan={plan.type} onClick={handlePlanClick} /> : <LicenseNav />}
      </div>
      <div className='flex items-center space-x-2'>
        {!isCurrentWorkspaceDatasetOperator && <ExploreNav className={navClassName} />}
        {!isCurrentWorkspaceDatasetOperator && <AppNav />}
        {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && <DatasetNav />}
        {!isCurrentWorkspaceDatasetOperator && <ToolsNav className={navClassName} />}
      </div>
      <div className='flex min-w-0 flex-[1] items-center justify-end pl-2 pr-3 min-[1280px]:pl-3'>
        <EnvNav />
>>>>>>> main
        <div className='mr-2'>
          <PluginsNav />
        </div> */}
        <div className='flex items-center gap-0.5'>
          <WorkspaceProvider>
            <WorkplaceSelector />
          </WorkspaceProvider>
          {enableBilling ? <PlanBadge allowHover sandboxAsUpgrade plan={plan.type} onClick={handlePlanClick} /> : <LicenseNav />}
        </div>
        <AccountDropdown />
      </div>
    </div>
  )
}
export default Header
