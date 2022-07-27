import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/model/device';
import { NgForm } from '@angular/forms';

const INITIAL_STATE = { label: undefined, os: undefined };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  devices!: Device[];
  active: Device = INITIAL_STATE;

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http
      .get<Device[]>('http://localhost:3000/devices')
      .subscribe((result) => (this.devices = result));
  }

  setActive(device: Device) {
    console.log(device);
    this.active = device;
  }

  deletSplice(res: Device) {
    const index = this.devices.indexOf(res);
    this.devices.splice(index, 1);
  }

  delete(event: MouseEvent, device: Device) {
    this.http
      .delete<any>(`http://localhost:3000/devices/${device.id}`)
      .subscribe(() => this.deletSplice(device));
  }

  save(form: NgForm) {
    if (this.active.id) {
      this.edit(form.value);
    } else {
      this.add(form.value);
      form.reset();
    }
  }

  addCallBack(res: Device) {
    this.devices.push(res);
    this.reset();
  }
  add(device: Device) {
    this.http
      .post<Device>(`http://localhost:3000/devices`, device)
      .subscribe((res) => this.addCallBack(res));
  }

  edit(device: Device) {
    const newDevice = Object.assign({}, this.active, device);

    this.http
      .patch<Device>(`http://localhost:3000/devices/${newDevice.id}`, newDevice)
      .subscribe(() => {
        const index = this.devices.findIndex(
          (device) => device.id === newDevice.id
        );
        this.devices[index] = newDevice;
      });
  }

  reset() {
    this.active = INITIAL_STATE;
  }
}
