// src/lib/formatDate.test.js
import { describe, it, expect } from 'vitest';
import { formatDate } from './_formatDate';
 
describe('formatDate', () => {
 
  // ─── Flujo normal ───────────────────────────────────────────────────────────
 
  it('formatea una fecha correctamente', () => {
    expect(formatDate('2024-01-01')).toBe('Jan 1, 2024');
  });
 
  it('formatea el mes correctamente en inglés', () => {
    expect(formatDate('2024-06-15')).toBe('Jun 15, 2024');
  });
 
  it('formatea el mes de diciembre correctamente', () => {
    expect(formatDate('2024-12-31')).toBe('Dec 31, 2024');
  });
 
  // ─── Casos límite ───────────────────────────────────────────────────────────
 
  it('maneja correctamente el 29 de febrero en año bisiesto', () => {
    expect(formatDate('2024-02-29')).toBe('Feb 29, 2024');
  });
 
  it('devuelve un string, no un objeto', () => {
    expect(typeof formatDate('2024-01-01')).toBe('string');
  });
 
  it('no devuelve una fecha vacía', () => {
    expect(formatDate('2024-01-01')).not.toBe('');
  });
 
});
 