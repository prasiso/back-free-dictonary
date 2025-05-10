import { Controller } from '@nestjs/common';
import { HealthController } from './health.controller';
import { d_health } from './decorator';

@Controller('')
export class HealthRouter {
  constructor(private readonly health_controller: HealthController) {}
  @d_health()
  async health() {
    return await this.health_controller.health();
  }
}
