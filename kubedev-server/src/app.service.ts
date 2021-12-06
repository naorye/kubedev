import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getNames(): Promise<string[]> {
    const { data: names } = await firstValueFrom(
      this.httpService.get<string[]>(
        'http://random-word-api.herokuapp.com/word?number=10',
      ),
    );

    return names;
  }
}
