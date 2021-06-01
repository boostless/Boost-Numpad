local uiOpen = false
local callback = {}


function CloseUI()
    SetNuiFocus(false, false)
    uiOpen = false
    SendNUIMessage({
        action = 'closeui'
    })
end

function openNumpad(code,show,cb)
    local length = string.len(tostring(code))
    local c_code = tostring(code)
    callback = cb
    SetNuiFocus(true, true)
    uiOpen = true

    if length > 10 then
        print('[^5Boost-Numpad^0] ^1ERROR The code length is above 10 characters defaulting code to 1234')
        c_code = '1234'
        length = 4
    elseif length < 4 then
        print('[^5Boost-Numpad^0] ^1ERROR The code length is below 4 characters defaulting code to 1234')
        c_code = '1234'
        length = 4
    end

    SendNUIMessage({
        action = 'openui',
        code = tostring(code),
        length = length,
        show = show
    })
end

RegisterNUICallback('SubmitCode', function(data)
    callback(data)
    CloseUI()
end)

RegisterNUICallback('CloseUI', function()
    CloseUI()
end)


AddEventHandler('onResourceStop', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then
      return
    end
    CloseUI()
end)
  
  