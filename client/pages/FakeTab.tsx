import React, { useState } from 'react';

import SampleCode from '../components/SampleCode';
import Separator from '../components/Separator';
import NumberType from '../constants/NumberType';
import ClickToCopy from './ClickToCopy';

interface FakeTabProps {
    numberType: NumberType;
    fake: () => string;
}

const FakeTab: React.FC<FakeTabProps> = ({ fake, numberType }) => {
    const [value, setValue] = useState(fake());
    const [copied, setCopied] = useState(false);
    const generate = () => {
        setValue(fake());
        setCopied(false);
    };
    const onCopied = () => setCopied(true);

    return (
        <div>
            <div className='p-4'>
                <SampleCode
                    code={`
import { ${numberType} } from '@phuocng/fake-numbers';

// Fake a number
const number = ${numberType}.fake(); // ${value}
`}
                />
            </div>
            <div className='flex flex-col items-center py-24'>
                <div className='relative w-2/3 text-center'>
                    <div
                        className='absolute top-0 right-0 bg-black text-white text-sm p-1'
                        style={{ transform: 'translate(0, -100%)' }}
                    >
                        { copied ? 'copied' : 'select to copy' }
                    </div>
                    <ClickToCopy onCopied={onCopied}>{value}</ClickToCopy>
                </div>
                <button
                    className='bg-black border-none font-light my-8 px-4 py-3 text-3xl text-white'
                    onClick={generate}
                >
                    Fake a number
                </button>
            </div>
        </div>
    );
};

export default FakeTab;