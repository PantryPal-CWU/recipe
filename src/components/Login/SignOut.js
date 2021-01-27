import React from 'react'
import { useLoginStatus } from '../../LoginContext'

export function SignOut() {
    const { toggleLoginStatus } = useLoginStatus();
    toggleLoginStatus();
}

