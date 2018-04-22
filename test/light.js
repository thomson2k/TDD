import test from 'ava'
import signal from '../src/signal'

test('starts with red light', t =>{
	const light = signal.getCurrent()

	t.is(light, 'red')
})