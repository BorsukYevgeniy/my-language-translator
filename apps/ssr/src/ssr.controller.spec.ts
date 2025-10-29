import { Test, TestingModule } from '@nestjs/testing';
import { SsrController } from './ssr.controller';
import { SsrService } from './ssr.service';

describe('SsrController', () => {
  let ssrController: SsrController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SsrController],
      providers: [SsrService],
    }).compile();

    ssrController = app.get<SsrController>(SsrController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ssrController.getHello()).toBe('Hello World!');
    });
  });
});
