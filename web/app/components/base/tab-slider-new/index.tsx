import type { FC } from 'react'
import cn from '@/utils/classnames'

type Option = {
  value: string
  text: string
  icon?: React.ReactNode
}
type TabSliderProps = {
  className?: string
  value: string
  onChange: (v: string) => void
  options: Option[]
}
const TabSliderNew: FC<TabSliderProps> = ({
  className,
  value,
  onChange,
  options,
}) => {
  return (
    <div className={cn(className, 'h-full flex flex-col w-[200px] text-[13px] m-2 border-r')}>
      {options.map(option => (
        <div
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            'flex h-[50px]  w-[190px] cursor-pointer items-center rounded-lg px-3 py-[7px] font-medium leading-[18px] text-text-tertiary hover:bg-components-main-nav-nav-button-bg-active border-b',
            value === option.value && 'border-components-main-nav-nav-button-border bg-components-main-nav-nav-button-bg-active text-components-main-nav-nav-button-text-active shadow-xs',
          )}
        >
          {option.icon}
          {option.text}
        </div>
      ))}
    </div>
  )
}

export default TabSliderNew
