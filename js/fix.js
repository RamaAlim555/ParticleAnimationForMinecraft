`setblock ^ ^1 ^${i*2-1} minecraft:redstone_wire(ENTER)setblock ^1 ^1 ^${i*2-1} minecraft:redstone_wire(ENTER)setblock ^2 ^1 ^${i*2-1} minecraft:command_block(ENTER)setblock ^ ^1 ^${i*2} repeater[facing=${facing}](ENTER)data merge block ^2 ^1 ^${i*2-1} {Command:"${value}"}`