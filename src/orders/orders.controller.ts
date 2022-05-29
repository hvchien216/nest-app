import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrder } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrder) {
    return this.orderService.create(createOrderDto);
  }
}
