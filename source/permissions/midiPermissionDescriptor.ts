interface MidiPermissionDescriptor extends PermissionDescriptor {
  sysex?: boolean;
  midiName: "midi";
}
