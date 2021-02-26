import {Currency} from '../model';
import {generateAddressFromXPub} from '../wallet';
import {preparePolkadotSignedTransaction} from './polkadot';

describe('DOT transactions', () => {
    it('should test DOT transaction data', async () => {
        const to = generateAddressFromXPub(Currency.DOT,
            true, 'xpub6E2KqGvWeAswKaAbnwL54tnhTJre3g7HJBA5otkZLkuMR8vVbFfF72qmfPqEbbnWsAQ5r69m3JSggkHVtyaCYact4wQR4P2U4oHkdkPgiu6', 2);
        const data = await preparePolkadotSignedTransaction(true, {
            mnemonic: 'quantum tobacco key they maid mean crime youth chief jungle mind design broken tilt bus shoulder leaf good forward erupt split divert bread kitten',
            index: 1,
            to,
            amount: '0.01'
        });
        console.log(data);
    });
});
