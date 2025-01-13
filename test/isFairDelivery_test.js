import { isFairDelivery } from '../src/scorecard.js';
import { assert, assertFalse } from 'jsr:@std/assert';

Deno.test('should return true when there are no extras in delivery', () => {
  const sampleData = {};
  assert(isFairDelivery(sampleData));
});

Deno.test('should return true when the delivery results in byes', () => {
  const sampleData = { extras: { byes: 1 } };
  assert(isFairDelivery(sampleData));
});

Deno.test('should return true when the delivery results in legbyes', () => {
  const sampleData = { extras: { legbyes: 1 } };
  assert(isFairDelivery(sampleData));
});

Deno.test('should return false when the delivery results in noballs', () => {
  const sampleData = { extras: { noballs: 1 } };
  assertFalse(isFairDelivery(sampleData));
});

Deno.test('should return false when the delivery results in wides', () => {
  const sampleData = { extras: { wides: 1 } };
  assertFalse(isFairDelivery(sampleData));
});