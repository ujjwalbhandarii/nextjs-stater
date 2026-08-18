import { describe, expect, test } from 'bun:test';
import { homeService } from './home.service';

describe('HomeService', () => {
  test('should return active feature status', () => {
    const status = homeService.getFeatureStatus();
    expect(status.id).toBe('home-001');
    expect(status.name).toBe('Home Dashboard');
    expect(status.status).toBe('active');
    expect(status.version).toBe('1.0.0');
  });

  test('should calculate metrics correctly', () => {
    const result = homeService.calculateMetrics(100, 0.15);
    expect(result).toBe(15);
  });

  test('should throw error for negative metric inputs', () => {
    expect(() => homeService.calculateMetrics(-5, 0.1)).toThrow(
      'Metrics values must be non-negative',
    );
  });
});
