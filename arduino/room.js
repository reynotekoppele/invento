class Room {
  constructor(name, devices = {lights: [], servos: []}) {
    this.name = name;
    this.devices = devices;
    this.areLightsOn = false;
    this.isDoorOpen = true;
    this.isDoorLocked = false;
  }

  turnOnLights() {
    this.devices.lights.map(device => device.on());
    this.areLightsOn = true;
  }

  turnOffLights() {
    this.devices.lights.map(device => device.off());
    this.areLightsOn = false;
  }

  toggleLightsOnOff() {
    this.areLightsOn ? this.turnOffLights() : this.turnOnLights();
  }

  openDoor() {
    this.devices.servos.map(servo => servo.to(90));
    this.isDoorOpen = true;
  }

  closeDoor() {
    this.devices.servos.map(servo => servo.to(0));
    this.isDoorOpen = false;
  }

  toggleDoorOpenClose() {
    if (!this.isDoorLocked)
      this.isDoorOpen ? this.closeDoor() : this.openDoor();
  }

  lockDoor() {
    this.isDoorLocked = true;
  }

  unlockDoor() {
    this.isDoorLocked = false;
  }
}

module.exports = Room;
