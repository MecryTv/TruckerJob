local uiOpen = false

-- Toggle UI mit F1
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        -- 288 ist der Keycode für F1
        if IsControlJustReleased(0, 288) then
            uiOpen = not uiOpen
            SetNuiFocus(uiOpen, uiOpen)
            SendNUIMessage({ action = uiOpen and 'open' or 'close' })
        end
    end
end)

RegisterNUICallback('close', function(data, cb)
    uiOpen = false
    SetNuiFocus(false, false)
    SendNUIMessage({ action = 'close' })
    if cb then cb('ok') end
end)