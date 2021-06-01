# Boost-Numpad

FiveM standalone numpad script

# Usage
```LUA
exports['Boost-Numpad']:openNumpad(code,show,function(correct)
  if correct then
    -- Do something
  end
end)

exports['Boost-Numpad']:openNumpad(1234,true,function(correct)
  if correct then
    -- Do something
  end
end)
```
# nui_doorlock example client/main.lua 419
```LUA
  if closestV.locked then
			exports['Boost-Numpad']:openNumpad(12345678910,true,function(correct)
				print(correct, closestV.locked)
				if correct then
					local locked = not closestV.locked
					if closestV.audioRemote then src = NetworkGetNetworkIdFromEntity(playerPed) else src = nil end
					TriggerServerEvent('nui_doorlock:updateState', closestDoor, locked, src) -- Broadcast new state of the door to everyone
				end
			end)
		else
			local locked = not closestV.locked
			if closestV.audioRemote then src = NetworkGetNetworkIdFromEntity(playerPed) else src = nil end
			TriggerServerEvent('nui_doorlock:updateState', closestDoor, locked, src) -- Broadcast new state of the door to everyone
		end
```
