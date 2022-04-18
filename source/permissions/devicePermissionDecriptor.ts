interface DevicePermissionDescriptor extends PermissionDescriptor {
  deviceId?: string;
  deviceName: "camera" | "microphone" | "speaker";
}
