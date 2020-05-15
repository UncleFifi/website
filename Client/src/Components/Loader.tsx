import React, { FC, ReactNode } from 'react'
type circleColor = "black" | "red" | "coral"
type circleSize = "Large" | "Medium"
interface ILoader
{
    blurrBackground?: boolean
    children: ReactNode
    isLoading: boolean
    circleColor?: circleColor
    isInnerLoader?: boolean
    circleSize?: circleSize
}
export const Loader:FC<ILoader> = (props: ILoader) => 
{
    const { children, isLoading } = props
    const loadingStatus = isLoading ? "isLoading" : "isNotLoading"
    const constantClassName = "fullHeight loader"
    const WrapperClassName = loadingStatus + " " + constantClassName
    const circleColor = props.circleColor || "black"

    if(isLoading === false)
        return <>{children}</>
    
    const isInnerLoader = props.isInnerLoader || false
    const circleSize = props.circleSize || "Large"
    const backgroundIsBlurred = props.blurrBackground || false
    const backgroundClass = backgroundIsBlurred ? "blurred" : ""

    return <>
        <div className="LoaderPosition fullHeight fullWidth flexbox-wrapper flexbox-center">
            <div className={`${loadingStatus} circle-container ${circleSize}`}>
                <div className="circle-container-blackout">
                </div>
                <div className={`circle ${circleColor}-bg flexbox-center flexbox-wrapper fullHeight fullWidth`}>
                    <div className="circle white-bg fullHeight fullWidth">
                    
                    </div>
                </div>
            </div>
        </div>
        <div className={`${WrapperClassName} ${backgroundClass}`}>
            {children}
        </div>
    </>
}