'use client'
import React, { useState } from 'react'
import ConnectRNSDomainButton from './ConnectRNSDomainButton'
import ConnectWalletButton from './ConnectWalletButton'

type props = {
    className?: string
    connectWalletTitle?: string
    connectRNSTitle?: string
    width?: number
}

const Connect = ({ className, connectWalletTitle = 'Connect wallet', connectRNSTitle = "Use RNS domain", width = 250 }: props) => {
    return (
        <div className={className}>
            <ConnectWalletButton title={connectWalletTitle} width={width} />
            {/* <ConnectRNSDomainButton title={connectRNSTitle} width={width} />  //Commented for future implementation*/} 
        </div>
    )
}

export default Connect
