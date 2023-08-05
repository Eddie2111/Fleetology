import React from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'

import { Card } from '@nextui-org/react'

const Text = dynamic(() => import('@nextui-org/react').then((mod) => mod.Text))

import { CreateDriverProps } from '@/components/Manager/Index/createdriver';
import { AllowDriverProps } from '@/components/Manager/Index/allowdriver';

const CreateDriver = dynamic<CreateDriverProps>(
    () => import('@/components/Manager/Index/createdriver'),
    { ssr: false }
  );
const AllowDriver = dynamic<AllowDriverProps>(
    () => import('@/components/Manager/Index/allowdriver'),
    { ssr: false }
  );

export default function Index() {
    const router = useRouter()
    React.useEffect(() => {
        try {
            const jsonwebtoken = require('jsonwebtoken')
            const token = localStorage.getItem('fleetology-user')
            const decoded = jsonwebtoken.decode(token)
            if (decoded.user_type !== 'manager') {
                router.push('/signin')
            }
        } catch (err) {
            console.log(err)
            router.push('/signin')
        }
    })

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="h-[32rem] w-[32rem] p-10 mx-auto px-auto">
                    <CreateDriver />
                </div>

                <div className="h-[32rem] w-[32rem] p-10 mx-auto px-auto">
                    <AllowDriver />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
                <div className="h-[32rem] w-[32rem] p-10 mx-auto px-auto">
                    <Card css={{ mw: '400px' }} isHoverable>
                        <Card.Header>
                            <Text>Show Driver Locations</Text>
                        </Card.Header>
                        <Card.Body>
                            <Text>~ ~</Text>
                        </Card.Body>
                        <Card.Footer>
                            <Text>~ ~</Text>
                        </Card.Footer>
                    </Card>
                </div>

                <div className="h-[32rem] w-[32rem] p-2 mx-auto px-auto">
                    <Card css={{ mw: '400px' }} isHoverable>
                        <Card.Header>
                            <Text>Show driver profiles</Text>
                        </Card.Header>
                        <Card.Body>
                            <Text>!! </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Text>~ ! ~</Text>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}
