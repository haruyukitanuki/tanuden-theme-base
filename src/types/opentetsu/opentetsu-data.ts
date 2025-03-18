import { AtsState } from './ats'
import { ControllerState } from './controller'
import { Diagram, NextStation } from './route'
import { SignalState } from './signal-state'
import { TrainState } from './train'

export interface OpenTetsuData {
  runNumber?: string // 運行番号
  diagramNumber?: string // 列車番号
  currentTime: Date
  diagram: Diagram
  nextStation: NextStation
  train: TrainState
  signalStates: SignalState[]
  atsState: AtsState
  controllerState: ControllerState
}
