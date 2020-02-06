export var defaultValues = {
    showThreeDots: true,
    hideArrowJumper: false,
    showQuickJumper: false,
    showDoubleArrowJumper: true,
    showSizeChanger: false,
    isSimple: false,
    isChecked: false,
    isDefaultChecked: false,
    isDisabled: false,
    isPartiallyChecked: false,
    isFullWidth: false,
    isRound: false,
    isRotating: false,
    isLoading: false,
    isAlternative: false,
    autoFocus: false,
    isMulti: false,
    iconRight: false,
    iconLeft: false,
    isBordered: false,
    tabs: [
        {
            value: "1",
            label: "Tab 1"
        },
        {
            value: "2",
            label: "Tab 2"
        },
        {
            value: "3",
            label: "Tab 3",
            isDisabled: true
        }
    ],
    className: "atlantic-component",
    direction: 'horizontal',
    selectDefaultValueOne: 'value 1',
    selectDefaultValueTwo: 'value 2',
    place: 'top',
    textOn: 'on',
    textOff: 'off',
    primaryButtonContent: 'Potvrdit',
    secondaryButtonContent: 'Zavřít',
    iconName: 'hamburger',
    tooltipType: 'dark',
    event: 'mouseenter',
    eventOff: 'mouseleave',
    type: 'default',
    size: 'medium',
    position: 'left',
    children: 'Change me, please 🥺',
    value: 'Change me, please 🥺',
    selectValue: [{ value: 'Change me, please 🥺' }],
    options: [
        { value: 'first option', label: 'First option' },
        { value: 'second option', label: 'Second option' },
        { value: 'third option', label: 'Third option' }
    ],
    chosenText: function (chosen, outOf) {
        var object = {
            chosen: '',
            outOf: ''
        };
        object.chosen = chosen;
        object.outOf = outOf;
        return object;
    },
    closeText: 'Zavřít',
    submitText: 'Potvrdit',
    deleteAllText: 'Odebrat vše',
    placeholder: 'Change me, please 🥺',
    defaultValue: 'Change me, please 🥺',
    notificationContent: 'Change me, please 🥺',
    notificationTitle: 'Notification',
    notificationButonIcon: null,
    content: 'Change me, please 🥺',
    messageType: 'primary',
    shape: 'circle',
    width: 20,
    height: 50,
    pageSizeOptions: [10, 20, 30, 40, 50],
    total: 1000,
    sortBy: "name",
    order: 'asc'
};
//# sourceMappingURL=defaultValues.js.map